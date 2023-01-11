import React from "react";
import { Link } from "react-scroll";
import { IPropsMenu, TInnerLink } from "./types";

const Menu: React.FC<IPropsMenu> = function (props) {
  const innerLink: TInnerLink = [
    { title: "Стоимость", anchor: "price" },
    {
      title: "Примеры работ",
      anchor: "examples",
    },
    {
      title: "Отзывы",
      anchor: "reviews",
    },
  ];
  return (
    <>
      <ul className="menu__list">
        {innerLink.map((elem) => (
          <li key={elem.anchor} className="menu__item">
            <Link
              onClick={() => props.setShowMenu(false)}
              className="menu__list-link"
              to={elem.anchor}
              smooth={true}
              duration={500}
            >
              {elem.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Menu;
