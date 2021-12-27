import {Variants} from "framer-motion";

export const scaleIn: Variants = {
    initial: {
        scale: .3,
        opacity: 0
    },

    animate: {
        scale: 1,
        opacity: 1,

        transition: {
            duration: .7,
            ease: "easeOut"
        }
    },

    exit: {
        scale: .3,
        opacity: 0
    }

};

export const sliderIn: Variants = {
    initial: {
        opacity: 0,
        x: -100
    },

    animate: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 1,
            ease: "backOut"
        }
    },

    exit: {
        opacity: 0,
        x: -100
    }

};

export const arrow: Variants = {
    initial: {
        opacity: 0,
        y: -50
    },

    animate: {
        opacity: 1,
        y: 0,

        transition: {
            delay: 2,
            duration: 1,
            ease: "easeOut"
        }
    },

    exit: {
        opacity: 0,
        y: -50
    },
};

export const arrowBounce: Variants = {
    initial: {},

    animate: {
        y: [0, -30, 0],

        transition: {
            delay: 3,
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
        }
    }
};

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
        },
    },
};