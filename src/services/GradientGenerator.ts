export class GradientGenerator {
    static generateCss(): string {
            return '{ "background": "linear-gradient(90deg, #ff8a00, #e52e71, #0075ff)" }';
    }
    static generateTailwindCode(): string {
        return 'tailwind';
    }
    static generateReactComponentCode(): string {
        return 'react';
    }
    static generateVueComponentCode(): string {
        return 'react';
    }
    static generateAngularComponentCode(): string {
        return 'angular';
    }
}