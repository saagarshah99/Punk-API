import { render, screen } from "@testing-library/react";

import SearchBox from "./SearchBox";

it("Should render a search box", () => {
    render(<SearchBox />);

    const searchInput = screen.getByRole("textbox", { name: /search/i });

    expect(searchInput).toBeInTheDocument();
});