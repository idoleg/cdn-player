import React from "react";
import renderer from "react-test-renderer";
//import { mount } from "enzyme";
import PageSection from "./PageSection";

describe("PageSection", () => {

	it("render correctly empty PageSection component", () => {
		const PageSectionComponent = renderer.create(<PageSection />).toJSON();
		expect(PageSectionComponent).toMatchSnapshot();
  });

  it("render correctly empty PageSection component with className", () => {
		const PageSectionComponent = renderer.create(<PageSection className="test-class" />).toJSON();
		expect(PageSectionComponent).toMatchSnapshot();
	});

	it("render correctly PageSection component with content", () => {
		const PageSectionComponent = renderer.create(
			<PageSection header="It's my title">
				<div>It's my content</div>
			</PageSection>).toJSON();
		expect(PageSectionComponent).toMatchSnapshot();
	});

});
