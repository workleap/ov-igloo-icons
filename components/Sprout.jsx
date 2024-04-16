/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Sprout /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Sprout = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.835 2.193c.781.198 1.687.587 2.416 1.306.742.731 1.13 1.639 1.322 2.417.054.22.094.434.123.638l.053-.055c.731-.742 1.64-1.13 2.417-1.322.769-.19 1.485-.208 1.902-.143.4.062.722.353.824.747.193.742.316 2.762-1.365 4.467-.727.737-1.649 1.125-2.44 1.32-.482.118-.949.172-1.337.18v1.502a.75.75 0 0 1-1.5 0V8.744c-.96.048-2.446-.184-3.748-1.467-.737-.727-1.125-1.649-1.32-2.44-.192-.781-.215-1.52-.149-1.953.069-.45.421-.788.86-.853.44-.065 1.17-.035 1.942.162Zm-1.273 1.37c.012.246.05.56.133.903.152.616.434 1.242.9 1.701.937.924 1.992 1.056 2.595 1.022a4.488 4.488 0 0 0-.13-.899c-.146-.594-.426-1.211-.902-1.681-.474-.467-1.1-.752-1.707-.906a4.728 4.728 0 0 0-.889-.14Zm6.154 6.492a4.791 4.791 0 0 1-.903.133c.014-.242.054-.55.14-.889.154-.607.439-1.233.906-1.707.47-.476 1.087-.756 1.681-.903.347-.086.66-.12.899-.129.034.603-.098 1.658-1.022 2.595-.46.466-1.085.748-1.701.9Z\" fill=\"#233043\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.893 3.291c1.189.303 2.54.888 3.62 1.952 1.095 1.08 1.678 2.432 1.97 3.612a9.27 9.27 0 0 1 .245 1.534c.22-.312.473-.613.76-.896 1.079-1.064 2.43-1.65 3.619-1.952 1.18-.3 2.273-.34 2.896-.247.486.072.874.446.95.942.093.614.064 1.722-.23 2.916-.295 1.203-.879 2.574-1.965 3.646-1.81 1.784-3.853 2.206-5.27 2.202h-.738v3.25a.75.75 0 0 1-1.5 0v-7.5h-.5v-.005c-1.418.053-3.593-.31-5.508-2.197-1.086-1.072-1.67-2.444-1.966-3.646-.293-1.195-.322-2.302-.229-2.916.076-.496.464-.87.95-.942.623-.092 1.717-.052 2.896.247Zm-2.4 1.201a7.589 7.589 0 0 0 .229 2.055c.254 1.036.737 2.125 1.565 2.94 1.876 1.85 4.035 1.871 4.968 1.718.024-.437-.013-1.167-.217-1.993-.248-1.004-.728-2.078-1.57-2.91-.835-.822-1.92-1.308-2.942-1.568-.832-.212-1.573-.26-2.033-.242Zm8.257 10.964c.936.152 3.091.127 4.963-1.718.828-.816 1.31-1.905 1.565-2.941a7.59 7.59 0 0 0 .229-2.055c-.46-.019-1.201.03-2.033.242-1.023.26-2.107.746-2.942 1.569-.842.83-1.322 1.905-1.57 2.91-.126.509-.188.982-.212 1.372v.62Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.836 5.356c1.45.368 3.104 1.083 4.426 2.387 1.344 1.324 2.056 2.979 2.412 4.419.13.522.215 1.03.265 1.498.238-.318.503-.625.799-.917 1.322-1.304 2.976-2.019 4.426-2.387 1.437-.366 2.774-.416 3.544-.302.631.093 1.136.58 1.234 1.224.115.758.078 2.112-.28 3.568-.36 1.466-1.073 3.145-2.406 4.459-2.133 2.103-4.531 2.66-6.256 2.692V22h-1v4.083c0 .507-.448.917-1 .917s-1-.41-1-.917V17h-1v-.003c-1.725-.032-4.123-.589-6.256-2.692-1.333-1.314-2.046-2.993-2.407-4.46-.357-1.455-.394-2.81-.279-3.567a1.457 1.457 0 0 1 1.234-1.224c.77-.114 2.107-.064 3.544.302ZM7.002 7a9.234 9.234 0 0 0 .278 2.367c.305 1.243.883 2.542 1.868 3.513 2.19 2.159 4.703 2.23 5.848 2.063a8.67 8.67 0 0 0-.264-2.302c-.297-1.204-.87-2.486-1.874-3.474-.994-.98-2.289-1.562-3.515-1.874a9.052 9.052 0 0 0-2.34-.293ZM17 19.761c0 .065.002.126.004.183 1.145.167 3.658.096 5.848-2.063.985-.971 1.563-2.27 1.868-3.513a9.234 9.234 0 0 0 .278-2.367 9.055 9.055 0 0 0-2.341.293c-1.226.312-2.521.893-3.515 1.873-1.003.99-1.576 2.27-1.874 3.475A8.966 8.966 0 0 0 17 19.701v.06Z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Sprout.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

export default Sprout;
