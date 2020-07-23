import "react-native";
import React from "react";
import App from "../src/App";
import Index from "../index.js";
import Metro from "../metro.config.js";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

describe("<Index />", () => {
  it("Is not modify", () => {
    expect(Index).toEqual({});
  });
});

describe("<Metro />", () => {
  it("Is not modify", () => {
    expect(Metro).toEqual({
      transformer: {
        assetPlugins: ["expo-asset/tools/hashAssetFiles"],
      },
    });
  });
});

describe("<App />", () => {
  it("Renders", () => {
    renderer.create(<App />);
  });

  it("Has 2 children", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("Renders correctly to prev snap", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
