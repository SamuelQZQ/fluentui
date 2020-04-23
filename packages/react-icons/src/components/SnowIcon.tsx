import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const SnowIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1761 1036q63 17 115 52t91 85 60 109 21 126q0 70-24 133t-67 114-101 85-128 47v-131q42-11 77-34t61-57 40-73 14-84q0-55-20-101t-57-81-83-54-102-20q-12-82-51-152t-98-122-134-81-159-29q-77 0-146 25t-127 69-98 106-61 135q-44-38-97-58t-111-21q-66 0-124 25t-102 68-69 102-25 125q0 48 13 92t39 83 61 68 79 50v136q-71-21-130-63t-101-98-65-125-24-143q0-93 35-174t96-142 142-96 175-36q74 0 147 25 39-65 92-117t117-88 136-56 148-20q93 0 178 29t158 81 126 125 83 161zm-731 797q32 19 32 55 0 27-19 45t-45 19q-12 0-26-5t-27-14-26-16-23-14q0 19 1 44t-3 47-18 38-44 16q-30 0-44-15t-18-38-4-48 2-44q-10 6-22 14t-26 16-28 13-26 6q-26 0-45-18t-19-46q0-36 32-55l70-41-70-41q-32-19-32-55 0-26 18-45t45-19q13 0 27 5t27 14 26 16 23 14q0-19-1-44t2-47 19-38 44-16q30 0 43 15t18 38 4 48-1 44q10-6 22-14t26-16 28-13 27-6q26 0 44 19t19 45q0 36-32 55l-70 41 70 41zm512-128q32 19 32 55 0 27-19 45t-45 19q-12 0-26-5t-27-14-26-16-23-14q0 19 1 44t-3 47-18 38-44 16q-30 0-44-15t-18-38-4-48 2-44q-10 6-22 14t-26 16-28 13-26 6q-26 0-45-18t-19-46q0-36 32-55l70-41-70-41q-32-19-32-55 0-26 18-45t45-19q13 0 27 5t27 14 26 16 23 14q0-19-1-44t2-47 19-38 44-16q30 0 43 15t18 38 4 48-1 44q10-6 22-14t26-16 28-13 27-6q26 0 44 19t19 45q0 36-32 55l-70 41 70 41z" />
    </svg>
  ),
  displayName: 'SnowIcon',
});

export default SnowIcon;
