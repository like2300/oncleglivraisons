/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        halcom: 'var(--font-family-halcom)',
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-contrast': 'var(--color-primary-contrast)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'bar-anim': 'barAnimation 1.5s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'breathe': 'breathe 3s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 1.2s ease-out forwards',
        'slideIn': 'slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slideOut': 'slideOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scaleIn': 'scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slideFromRight': 'slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slideFromLeft': 'slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slideFromTop': 'slideFromTop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slideFromBottom': 'slideFromBottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'moveLight': 'moveLight 8s infinite alternate',
        'wavePulse': 'wavePulse 8s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        'waveSwing': 'waveSwing 12s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        'pulse': 'pulse 4s infinite alternate',
        'slide-enter': 'slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-exit': 'slideOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-anim': 'fadeIn 0.8s ease-out',
        'slide-from-right': 'slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-from-left': 'slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-content': 'slideContentIn 0.8s 0.2s both',
        'float-anim': 'floatAnim 3s ease-in-out infinite',
        'svg-wave-animation': 'wavePulse 8s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        'wave-group': 'waveSwing 12s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        'reveal-element': 'revealElement 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)',
        'timeline-reveal': 'timelineReveal 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        barAnimation: {
          '0%': { transform: 'scaleX(1)', opacity: '0.5' },
          '50%': { transform: 'scaleX(1.15)', opacity: '1' },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(50px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scaleX(1)', opacity: '0.5' },
          '50%': { transform: 'scaleX(1.15)', opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateX(-100%) scale(0.9)', opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideFromTop: {
          'from': { transform: 'translateY(-30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideFromBottom: {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        moveLight: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '25%': { transform: 'translate(20px, 30px) scale(1.2)', opacity: '0.7' },
          '50%': { transform: 'translate(-10px, 20px) scale(0.9)', opacity: '0.4' },
          '75%': { transform: 'translate(15px, -10px) scale(1.1)', opacity: '0.6' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
        },
        wavePulse: {
          '0%': { opacity: '0.7', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.02)' },
          '100%': { opacity: '0.7', transform: 'scaleY(1)' },
        },
        waveSwing: {
          '0%': { transform: 'rotate(0.3deg) translateX(-1px)' },
          '25%': { transform: 'rotate(-0.3deg) translateX(1px)' },
          '50%': { transform: 'rotate(0.4deg) translateX(-0.5px)' },
          '75%': { transform: 'rotate(-0.2deg) translateX(0.5px)' },
          '100%': { transform: 'rotate(0.3deg) translateX(-1px)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '100%': { transform: 'scale(1.5)', opacity: '0.4' },
        },
        slideContentIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        floatAnim: {
          '0%': { transform: 'translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(-6px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '0.8' },
        },
        revealElement: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        timelineReveal: {
          '0%': { opacity: '0', transform: 'translateY(80px) perspective(1000px) rotateY(15deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) perspective(1000px) rotateY(0)' },
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-primary': {
          color: 'var(--color-primary)',
        },
        '.bg-primary': {
          backgroundColor: 'var(--color-primary)',
        },
        '.border-primary': {
          borderColor: 'var(--color-primary)',
        },
        '.hover\\:text-primary:hover': {
          color: 'var(--color-primary)',
        },
        '.hover\\:bg-primary:hover': {
          backgroundColor: 'var(--color-primary)',
        },
        '.hover\\:border-primary:hover': {
          borderColor: 'var(--color-primary)',
        },
        '.text-primary-contrast': {
          color: 'var(--color-primary-contrast)',
        },
        '.bg-primary-contrast': {
          backgroundColor: 'var(--color-primary-contrast)',
        },
        '.border-primary-contrast': {
          borderColor: 'var(--color-primary-contrast)',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.line-clamp-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.hover-overlay': {
          transition: 'opacity 0.3s ease-in-out',
        },
        '.carousel-slide': {
          transition: 'all 0.5s ease-in-out',
        },
        '.popup-content': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        },
        '.popup-image': {
          animation: 'float 6s ease-in-out infinite',
        },
        '.popup-title': {
          animation: 'slideFromTop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        },
        '.popup-text': {
          animation: 'slideFromBottom 0.8s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        },
        '.popup-button': {
          animation: 'scaleIn 0.8s 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        },
        '.kinetic-light-1, .kinetic-light-2, .kinetic-light-3': {
          position: 'absolute',
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          filter: 'blur(40px)',
          zIndex: '-1',
        },
        '.kinetic-light-1': {
          top: '10%',
          left: '10%',
          animationDelay: '0s',
        },
        '.kinetic-light-2': {
          top: '60%',
          left: '70%',
          animationDelay: '2s',
        },
        '.kinetic-light-3': {
          top: '30%',
          left: '50%',
          animationDelay: '4s',
        },
        '.menu-overlay': {
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        },
        '.menu-open': {
          transform: 'translateY(0)',
        },
        '.menu-closed': {
          transform: 'translateY(-100%)',
        },
        '.popup-show': {
          transform: 'scale(1) !important',
          opacity: '1 !important',
        },
        '.animate-fadeIn': {
          animation: 'fadeInUp 0.6s ease-out forwards',
          opacity: '0',
        },
        '.cta-button': {
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        },
        '.cta-button:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
        },
        '.cta-secondary': {
          transition: 'all 0.3s ease',
        },
        '.cta-secondary:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
        '.animate-float': {
          animation: 'float 3s ease-in-out infinite',
        },
        '.svg-wave-animation': {
          animation: 'wavePulse 8s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        },
        '.wave-group': {
          transformOrigin: 'center',
          animation: 'waveSwing 12s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        },
        '.reveal-element': {
          opacity: '0',
          transform: 'translateY(60px) scale(0.9)',
          transition: 'all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)',
        },
        '.reveal-element.is-visible': {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
        },
        '.timeline-line .reveal-element': {
          transform: 'translateY(80px) perspective(1000px) rotateY(15deg)',
        },
        '.timeline-line .reveal-element.is-visible': {
          transform: 'translateY(0) perspective(1000px) rotateY(0)',
        },
        '.delay-100': {
          transitionDelay: '100ms',
        },
        '.delay-200': {
          transitionDelay: '200ms',
        },
        '.delay-300': {
          transitionDelay: '300ms',
        },
        '.delay-400': {
          transitionDelay: '400ms',
        },
        '.delay-500': {
          transitionDelay: '500ms',
        },
        '.delay-600': {
          transitionDelay: '600ms',
        },
        '.slide-content': {
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.slide-content-element': {
          animation: 'slideContentIn 0.8s 0.2s both',
        },
        '@keyframes slideContentIn': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        '.slide-content-element:nth-child(1)': {
          animationDelay: '0.1s',
        },
        '.slide-content-element:nth-child(2)': {
          animationDelay: '0.2s',
        },
        '.slide-content-element:nth-child(3)': {
          animationDelay: '0.3s',
        },
        '.slide-content-element:nth-child(4)': {
          animationDelay: '0.4s',
        },
      })
    }
  ],
}
