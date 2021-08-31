/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./scripts/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Slider /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Slider = ({size, ariaLabel, className, ...other}) => {
const svgData = {"32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.256 17.606H2.468v-3.695h4.978c1.046-5.827 5.186-7.147 7.32-7.031 4.748 0 6.817.8 9.144 5.985.157.35.29.698.404 1.046h5.412v3.695h-4.965c-.264 3.264-2.262 5.952-4.688 6.94-3.312 1.348-12.088.846-12.817-6.94z\" fill=\"#fff\"/><path d=\"M16.61 13.058a.762.762 0 0 0-.212-.53.716.716 0 0 0-.514-.22.716.716 0 0 0-.515.22.762.762 0 0 0-.213.53v5.884c0 .199.077.39.213.53a.716.716 0 0 0 1.028 0 .762.762 0 0 0 .214-.53v-5.884zm-3.776.994a.762.762 0 0 0-.213-.53.716.716 0 0 0-.514-.22.716.716 0 0 0-.515.22.762.762 0 0 0-.213.53v3.896c0 .199.077.39.213.53a.716.716 0 0 0 1.029 0 .762.762 0 0 0 .213-.53v-3.896zm7.06-.631c.192 0 .377.079.514.22.136.14.213.331.213.53v3.658c0 .199-.077.39-.213.53a.716.716 0 0 1-.515.22.716.716 0 0 1-.514-.22.762.762 0 0 1-.213-.53V14.17c0-.199.077-.39.213-.53a.716.716 0 0 1 .514-.22v.001z\" fill=\"#233043\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.784 7.946c1.693-1.46 3.66-1.884 5-1.816 2.379 0 4.251.196 5.83 1.152 1.593.964 2.77 2.629 3.956 5.268.091.204.175.407.252.61h2.64c1.117 0 1.881.434 2.327 1.121.41.632.47 1.363.47 1.83 0 .573-.184 1.25-.643 1.794-.475.566-1.199.934-2.154.934H25.32c-.615 3.006-2.59 5.431-4.98 6.405-1.945.791-5.465.98-8.462-.253-1.517-.625-2.934-1.628-3.94-3.14a8.515 8.515 0 0 1-1.232-3.012H4.538c-.955 0-1.678-.367-2.154-.934a2.824 2.824 0 0 1-.643-1.793c0-.468.06-1.2.47-1.83.446-.688 1.21-1.121 2.327-1.121h2.318c.548-2.424 1.639-4.103 2.928-5.215zm15.724 9.393h1.954c.564 0 .876-.203 1.056-.416a1.3 1.3 0 0 0 .287-.811c0-.369-.057-.738-.226-.998-.132-.204-.402-.453-1.117-.453h-2.188c.204.914.275 1.812.233 2.678zM6.497 15.867c-.025.512-.021 1.003.009 1.472H4.538c-.565 0-.876-.203-1.056-.416a1.296 1.296 0 0 1-.287-.811c0-.369.057-.738.226-.998.132-.204.403-.453 1.117-.453h2.06c-.046.4-.08.803-.1 1.206h-.001zm1.453.076c.177-3.59 1.402-5.67 2.766-6.846 1.387-1.195 2.992-1.523 4.01-1.468h.04c2.36 0 3.89.208 5.11.946 1.21.732 2.23 2.06 3.372 4.605 2.153 4.796-.296 9.388-3.443 10.669-1.593.648-4.73.843-7.389-.251-1.311-.54-2.47-1.38-3.279-2.595-.804-1.21-1.297-2.848-1.187-5.06z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Slider.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Slider.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Slider;
