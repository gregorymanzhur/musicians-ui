import React, { FC, KeyboardEvent, Ref, useCallback, useState, useRef } from 'react';
import ReactMaskedInput from "react-text-mask";

import { Omit } from '../../helpers/types';
import { IconTypes, Icon } from '../Icon';
import { Dropdown, DropdownContent, DropdownTrigger } from '../Dropdown';
import { TextFieldWithRef, TextFieldProps } from '../TextField';
import { TextFieldWrapper, MenuWrapper, MenuItemWrapper } from './styled';

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<TextFieldProps, 'iconRight'> {
  options: Option[];
  isOpen?: boolean;
  editable?: boolean;
}

export const Select: FC<SelectProps> = ({
  options,
  isOpen: propsIsOpen = false,
  editable = false,
  onChange,
  value,
  defaultValue,
  ...restProps
}) => {
  const inputRef: Ref<ReactMaskedInput> = useRef(null);

  const getOptionByValue = useCallback(
    (value: string) => options.find(option => option.value === value),
    [],
  );

  const getDefaultRenderedValue = useCallback(
    () => {
      if (defaultValue && !value) {
        const defaultOption = getOptionByValue(defaultValue);
        if (defaultOption) return defaultOption.label;
      }
      return undefined;
    },
    [],
  );

  const getDefaultSelectedOption = useCallback(
    () => {
      if (defaultValue && !value) {
        return getOptionByValue(defaultValue);
      }
      return undefined;
    },
    [],
  );

  const [renderedValue, setRenderedValue] = useState<string | undefined>(getDefaultRenderedValue());
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(getDefaultSelectedOption());
  const [renderedOptions, setRenderedOptions] = useState<Option[]>(options);
  const [isOpen, setIsOpen] = useState<boolean>(propsIsOpen);
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number | null>(null);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(
    () => {
      setIsOpen(false);
      setCurrentOptionIndex(null);
    },
    [],
  );

  const handleSelect = useCallback(
    (option: Option) => () => {
      setRenderedValue(option.label);
      setSelectedOption(option);
      if (onChange) onChange(option.value);

      handleClose();
      inputRef.current!.inputElement.focus();
    },
    [],
  );

  const handleChange = useCallback(
    (value: string) => {
      setRenderedValue(value);
      handleOpen();

      if (editable) {
        const renderedOptions = options.filter(option => {
          return option.label.toLowerCase().includes(value.toLowerCase());
        });

        setCurrentOptionIndex(null);
        setRenderedOptions(renderedOptions);
      }
    },
    [currentOptionIndex, renderedOptions],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (['Enter', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();

        handleOpen();

        if (currentOptionIndex === null) {
          setCurrentOptionIndex(0);
        } else if (event.key === 'ArrowUp' && currentOptionIndex > 0) {
          setCurrentOptionIndex(currentOptionIndex - 1);
        } else if (event.key === 'ArrowDown' && currentOptionIndex < renderedOptions.length - 1) {
          setCurrentOptionIndex(currentOptionIndex + 1);
        } else if (event.key === 'Enter') {
          handleSelect(renderedOptions[currentOptionIndex])();
        }
      }
    },
    [currentOptionIndex, renderedOptions],
  );

  const getRenderedValue = useCallback(
    () => {
      if (value) {
        const option = getOptionByValue(value);
        if (option) return option.label;
      }

      return renderedValue;
    },
    [renderedValue],
  );

  return (
    <Dropdown active={isOpen} onShow={handleOpen} onHide={handleClose} disabled={restProps.disabled}>
      <DropdownTrigger>
        <TextFieldWrapper editable={editable}>
          <TextFieldWithRef
            {...restProps}
            ref={inputRef}
            value={getRenderedValue()}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            active={isOpen}
            readOnly={!editable}
            iconRight={{
              type: IconTypes.FA,
              title: isOpen ? 'FaCaretUp' : 'FaCaretDown',
              name: 'arrowIcon',
            }}
          />
        </TextFieldWrapper>
      </DropdownTrigger>
      <DropdownContent>
        <MenuWrapper>
          {renderedOptions.map((option, index) => (
            <MenuItemWrapper
              key={option.value}
              onClick={handleSelect(option)}
              current={index === currentOptionIndex}
            >
              {selectedOption && selectedOption.value === option.value && (
                <Icon type={IconTypes.FA} title="FaCheck" />
              )}
              {option.label}
            </MenuItemWrapper>
          ))}
        </MenuWrapper>
      </DropdownContent>
    </Dropdown>
  );
};
