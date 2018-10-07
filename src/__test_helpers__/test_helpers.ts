interface ExtendedMatchers extends jest.Matchers<void> {
    toHaveTextContent: (htmlElement: string) => object;
    toBeInTheDOM: () => boolean;
    toBeInTheDocument: () => boolean;
}
