import React from "react";
const PAGE_HEIGHT_DEFAULT = "200vh";

export default class FullPageScroll extends React.Component {
  constructor(props) {
    super(props);
    // throttle so we can rest easy.
  }

  state = {
    position: this.POSITIONS.top,
    visible: []
  };

  nodes = [];

  componentDidMount() {
    // Mount scroll listener, and invoke once to set.
    this.handleScroll();
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Unmount scroll listener.
    document.removeEventListener("scroll", this.handleScroll);
  }

  get POSITIONS() {
    return {
      top: "top",
      middle: "middle",
      bottom: "bottom"
    };
  }

  capitalize(val) {
    return val.charAt(0).toUpperCase() + val.substr(1);
  }

  get styles() {
    const { position } = this.state;

    return {
      container: {
        position: "relative",
        width: "99vw"
      },
      fixed: {
        position: position === this.POSITIONS.middle ? "fixed" : "absolute",
        height: "100vh",
        width: "99vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        right: 0,
        top: position === this.POSITIONS.bottom ? "auto" : "0",
        bottom: position === this.POSITIONS.bottom ? "0" : "auto"
      },
      page: pageHeight => ({
        height: pageHeight,
        position: "relative"
      }),
      debug: direction => {
        const getBorderDirectionProp = prop =>
          `border${this.capitalize(direction)}${this.capitalize(prop)}`;

        return {
          [direction]: 0,
          width: "99%",
          position: "absolute",
          border: 0,
          padding: "6px",
          [getBorderDirectionProp("color")]: "green",
          [getBorderDirectionProp("width")]: "1px",
          [getBorderDirectionProp("style")]: "solid",
          borderStyle: "solid",
          color: "green",
          fontSize: "10px"
        };
      }
    };
  }

  get position() {
    const rect = this.node.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
      return this.POSITIONS.bottom;
    } else if (
      (rect.top < 0 && rect.bottom > 0) ||
      (rect.top > 0 && rect.bottom < 0)
    ) {
      return this.POSITIONS.middle;
    } else {
      return this.POSITIONS.top;
    }
  }

  get visible() {
    const windowHeight = window.innerHeight;
    return this.nodes.map((el, i) => {
      const rect = el.getBoundingClientRect();
      return rect.top < windowHeight && rect.bottom > 0;
    });
  }

  handleScroll = () => {
    this.setState({ visible: this.visible, position: this.position });
  };

  getPageHeight(i) {
    const { pageHeight } = this.props;
    return typeof pageHeight === "string"
      ? pageHeight
      : Array.isArray(pageHeight)
        ? pageHeight[i] || PAGE_HEIGHT_DEFAULT
        : PAGE_HEIGHT_DEFAULT;
  }

  isOnlyVisible = i => {
    const visible = this.visible.filter(v => v);
    return visible.length === 1 && this.visible[i];
  };

  render() {
    console.log(this.state);
    return (
      <div style={this.styles.container} ref={el => (this.node = el)}>
        <div>
          {Array.from({ length: this.props.pages }, (v, i) => {
            const pageHeight = this.getPageHeight(i);
            return (
              <div
                ref={el => (this.nodes[i] = el)}
                style={this.styles.page(pageHeight)}
                key={i}
              >
                {this.props.debug && (
                  <section>
                    <div style={this.styles.debug("top")}>
                      Page {i} start / {pageHeight}
                    </div>
                    <div style={this.styles.debug("bottom")}>
                      Page {i} end / {pageHeight}
                    </div>
                  </section>
                )}
              </div>
            );
          })}
        </div>

        <div style={this.styles.fixed}>
          {this.props.children({
            ...this.state,
            isOnlyVisible: this.isOnlyVisible
          })}
        </div>
      </div>
    );
  }
}

FullPageScroll.defaultProps = {
  pages: 3, // How many times to split scroll, useful for animations.
  pageHeight: PAGE_HEIGHT_DEFAULT, // How tall each page is, auto for automatic
};
