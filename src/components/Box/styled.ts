import { styled } from '../../theme';
import { BoxProps } from './Box';

const boxSizesDict = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '48px',
  xxl: '64px',
};

export const BoxWrapper = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${p => p.flexDirection};

  margin-left: ${p => p.ml && boxSizesDict[p.ml] || p.mh && boxSizesDict[p.mh] || p.m && boxSizesDict[p.m] || 0};
  margin-right: ${p => p.mr && boxSizesDict[p.mr] || p.mh && boxSizesDict[p.mh] || p.m && boxSizesDict[p.m] || 0};
  margin-top: ${p => p.mt && boxSizesDict[p.mt] || p.mv && boxSizesDict[p.mv] || p.m && boxSizesDict[p.m] || 0};
  margin-bottom: ${p => p.mb && boxSizesDict[p.mb] || p.mv && boxSizesDict[p.mv] || p.m && boxSizesDict[p.m] || 0};
  
  padding-left: ${p => p.pl && boxSizesDict[p.pl] || p.ph && boxSizesDict[p.ph] || p.p && boxSizesDict[p.p] || 0};
  padding-right: ${p => p.pr && boxSizesDict[p.pr] || p.ph && boxSizesDict[p.ph] || p.p && boxSizesDict[p.p] || 0};
  padding-top: ${p => p.pt && boxSizesDict[p.pt] || p.pv && boxSizesDict[p.pv] || p.p && boxSizesDict[p.p] || 0};
  padding-bottom: ${p => p.pb && boxSizesDict[p.pb] || p.pv && boxSizesDict[p.pv] || p.p && boxSizesDict[p.p] || 0};
  
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};
`;