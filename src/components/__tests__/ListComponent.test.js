import React from "react";
import { shallow, mount } from "../../enzymeConfig";

import ListComponent from "../ListComponent";

describe("List tests", () => {
  it("should render items", () => {
    const items = [
      { id: 1, name: "Aurum" },
      { id: 2, name: "Astrea" },
    ];

    const wrapper = shallow(<ListComponent items={items} />);

    console.log(wrapper.debug());

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("ListItemComponent")).toHaveLength(items.length);
  });

  it("should remder item with right label", () => {
    const items = [
      { id: 1, name: "Aurum" },
      { id: 2, name: "Astrea" },
    ];

    const wrapper = mount(<ListComponent items={items} />);

    console.log(wrapper.debug());

    expect(wrapper.find("[data-test='listItem']").at(0).text()).toEqual(
      "Aurum"
    );
  });
});
