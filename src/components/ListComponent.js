import React, { Fragment, PureComponent } from "react";
import ListItemComponent from "./ListItemComponent";

class ListComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => {
    // service.fetchSomenthing(value);
    console.log(value);
  };

  mapListItems = () => {
    const { items } = this.props;

    return items.map((item) => (
      <ListItemComponent
        key={item.id}
        label={item.name}
        onClick={() => this.handleClick(item.name)}
      />
    ));
  };

  render() {
    const { items } = this.props;

    return !!items.length ? (
      <div data-test="list">{this.mapListItems()}</div>
    ) : (
      <Fragment />
    );
  }
}

export default ListComponent;
