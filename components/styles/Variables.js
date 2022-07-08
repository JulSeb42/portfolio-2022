const Variables = {
    // Colors
    Colors: {
        Background: "var(--color-background)",
        Font: "var(--color-font)",
        White: "var(--color-white)",
        White70: "var(--color-white-70)",
        White20: "var(--color-white-20)",
        White5: "var(--color-white-5)",
        Black: "var(--color-black)",
        DarkGray: "var(--color-dark-gray)",
        DarkBlue: "var(--color-dark-blue)",
        Blue: "var(--color-blue)",
        Overlay: "var(--color-overlay)",
    },

    // Shadows
    Shadows: {
        Button: "var(--shadow-button)",
        Modal: "var(--shadow-modal)",
    },

    // Effects
    Effects: {
        Blur: "backdrop-filter: var(--effect-blur)",
    },

    // Spacers
    Spacers: {
        XXL: "var(--spacer-xxl)",
        XL: "var(--spacer-xl)",
        L: "var(--spacer-l)",
        M: "var(--spacer-m)",
        S: "var(--spacer-s)",
        XS: "var(--spacer-xs)",
        XXS: "var(--spacer-xxs)",
    },

    // Font families
    FontFamilies: {
        Body: "var(--font-family-body)",
        Code: "var(--font-family-code)",
    },

    // Font weights
    FontWeights: {
        Regular: "var(--font-weight-regular)",
        Bold: "var(--font-weight-bold)",
        Black: "var(--font-weight-black)",
    },

    // Font sizes
    FontSizes: {
        Titles: {
            Desktop: {
                XL: "var(--font-size-title-xl)",
                L: "var(--font-size-title-l)",
                M: "var(--font-size-title-m)",
                S: "var(--font-size-title-s)",
            },
            Mobile: {
                XL: "var(--font-size-title-xl-mobile)",
                L: "var(--font-size-title-l-mobile)",
                M: "var(--font-size-title-m-mobile)",
            },
        },
        Body: "var(--font-size-body)",
        Nav: "var(--font-size-nav)",
        Modal: "var(--font-size-modal)",
        Small: "var(--font-size-small)",
    },

    // Line height
    LineHeight: "var(--line-height)",

    // Radiuses
    Radiuses: {
        XXL: "var(--radius-xxl)",
        XL: "var(--radius-xl)",
        L: "var(--radius-l)",
        M: "var(--radius-m)",
        S: "var(--radius-s)",
        XS: "var(--radius-xs)",
        Round: "var(--radius-round)",
    },

    // Container
    Container: {
        MainWidth: "var(--main-width)",
        Template: "var(--container-template)",
    },

    // Transitions
    Transitions: {
        Short: "var(--transition-short)",
        Long: "var(--transition-long)",
        Bezier: "var(--transition-bezier)",
        Fade: "var(--transition-fade)",
    },

    // Breakpoints
    Breakpoints: {
        Mobile: "(max-width: 600px)",
        Tablet: "(max-width: 1024px)",
        Touch: "(hover: none) and (pointer: coarse)",
    },
}

export default Variables
