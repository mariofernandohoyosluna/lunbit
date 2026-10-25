import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { brandIsotipoPath, brandIsotipoSeed } from '../data/siteContent.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, Observer, DrawSVGPlugin, MorphSVGPlugin, SplitText);

export function useLandingAnimations() {
  useEffect(() => {
    if (!document.querySelector('.hero')) return undefined;
    const mm = gsap.matchMedia();
    mm.add({
      reduce: '(prefers-reduced-motion: reduce)',
      desktop: '(min-width: 761px) and (prefers-reduced-motion: no-preference)',
      mobile: '(max-width: 760px) and (prefers-reduced-motion: no-preference)',
    }, (context) => {
      const { reduce } = context.conditions;
      if (reduce) return () => {};
      const interactionCleanups = [];
      const textSplits = [];
      const smoother = context.conditions.desktop ? ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: 0.72, smoothTouch: 0, effects: false, normalizeScroll: false, ignoreMobileResize: true }) : null;
      const duration = context.conditions.mobile ? 0.55 : 0.8;
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: '.hero', start: 'top top+=84', end: 'bottom top+=84',
          toggleActions: 'play reverse play reverse', invalidateOnRefresh: true,
        },
      });
      intro.from('.eyebrow', { y: 18, opacity: 0, duration: 0.65 });
      const heroTitleSplit = SplitText.create('.hero-title', {
        type: 'lines,words', mask: 'lines', autoSplit: true, aria: 'auto',
        onSplit: (self) => gsap.from(self.words, {
          yPercent: 125, rotationX: -68, autoAlpha: 0, filter: 'blur(11px)',
          duration: context.conditions.mobile ? 0.82 : 1.12,
          stagger: { each: context.conditions.mobile ? 0.075 : 0.055, from: 'start' },
          ease: 'power4.out', transformOrigin: '50% 100%', transformPerspective: 950, delay: 0.18,
          scrollTrigger: {
            trigger: '.hero', start: 'top top+=84', end: 'bottom top+=84',
            toggleActions: 'play reverse play reverse', invalidateOnRefresh: true,
          },
        }),
      });
      textSplits.push(heroTitleSplit);
      intro.from('.hero-art-wrap', { x: 34, opacity: 0, scale: 0.97, duration: 1.05 }, 0.36)
        .from('.hero-visual-chip', { y: 14, opacity: 0, duration: 0.55, stagger: 0.12 }, '-=0.45')
        .from('.hero-copy', { y: 20, autoAlpha: 0, filter: 'blur(5px)', duration: 0.72, ease: 'power3.out' }, 1.02)
        .from('.hero-actions', { y: 17, autoAlpha: 0, duration: 0.58 }, 1.28)
        .from('.hero-proof > span:not(.hero-proof-line), .hero-proof > i', { y: 8, autoAlpha: 0, duration: 0.42, stagger: 0.055, ease: 'power2.out' }, 1.48);
      gsap.to('.hero-visual-chip', { y: -7, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.28 });
      gsap.set('.hero-brand-mark', { autoAlpha: 0, scale: 0.92 });
      gsap.set('.hero-brand-stroke', { drawSVG: 0 });
      const isMobile = context.conditions.mobile;
      const heroBrandTimeline = gsap.timeline({ scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: `+=${isMobile ? 850 : 1200}`,
        pin: !isMobile,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: isMobile ? 0.35 : 0.7,
        invalidateOnRefresh: true,
      } });
      heroBrandTimeline
        .to('.hero-brand-path', { morphSVG: { shape: brandIsotipoPath, type: 'rotational' }, duration: 0.32, ease: 'power2.inOut' }, 0)
        .to('.hero-brand-path', { drawSVG: '0% 100%', duration: 0.27, ease: 'none' }, 0.29)
        .to('.hero-brand-rect', { drawSVG: '0% 100%', duration: 0.17, ease: 'none' }, 0.48)
        .to('.hero-brand-mark', { autoAlpha: 1, scale: 1, duration: 0.22, ease: 'none' }, 0.43)
        .to('.hero-brand-stroke', { autoAlpha: 0, duration: 0.08, ease: 'none' }, 0.57)
        .to('.hero-brand-mark', { autoAlpha: 0, scale: 0.94, duration: 0.14, ease: 'none' }, 0.8)
        .to('.hero-brand-path', { morphSVG: { shape: brandIsotipoSeed, type: 'rotational' }, drawSVG: '100% 100%', autoAlpha: 0, duration: 0.2, ease: 'power1.inOut' }, 0.8)
        .to('.hero-brand-rect', { drawSVG: '100% 100%', autoAlpha: 0, duration: 0.2, ease: 'power1.inOut' }, 0.8);
      gsap.to('.ribbon-track', { xPercent: context.conditions.mobile ? -5 : -11, ease: 'none', scrollTrigger: { trigger: '.motion-ribbon', start: 'top bottom', end: 'bottom top', scrub: 0.65 } });
      const scrollCue = document.querySelector('.scroll-cue');
      if (scrollCue) {
        gsap.to('.scroll-cue-icon', { y: 4, duration: 0.72, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.scroll-cue-line', { scaleX: 0.62, duration: 1.05, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        const cueOpacity = gsap.quickTo(scrollCue, 'autoAlpha', { duration: 0.24, ease: 'power2.out' });
        const wheelObserver = Observer.create({ target: window, type: 'wheel,touch', preventDefault: false, tolerance: 10, onChangeY: (self) => {
          if (self.deltaY > 0) cueOpacity(0);
          else if (window.scrollY < 80) cueOpacity(1);
        } });
        interactionCleanups.push(() => wheelObserver.kill());
      }
      const onAnchorClick = (event) => {
        const anchor = event.target.closest?.('a[href^="#"]');
        if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        let target;
        try { target = document.querySelector(href); } catch { return; }
        if (!target) return;
        event.preventDefault();
        if (window.location.hash !== href) window.history.pushState(null, '', href);
        if (smoother) smoother.scrollTo(target, true, 'top top+=84');
        else gsap.to(window, { duration: 0.78, ease: 'power2.inOut', overwrite: 'auto', scrollTo: { y: target, offsetY: 84, autoKill: true } });
      };
      document.addEventListener('click', onAnchorClick);
      interactionCleanups.push(() => document.removeEventListener('click', onAnchorClick));
      const textSelectors = [
        '.section-kicker', '.needs-layout h2', '.section-heading h2', '.section-intro',
        '.need-item h3', '.need-item p', '.service-card-body h3', '.service-card-body > p',
        '.process-step .step-number', '.process-step h3', '.process-step p', '.featured-project-content .featured-project-kicker',
        '.featured-project-content h3', '.featured-project-content > p:not(.featured-project-kicker)',
        '.contact-copy h2', '.contact-copy > p', '.contact-panel-head > span:first-child',
        '.contact-panel > p', '.footer-main > p', '.footer-bottom > span',
      ];
      const textElements = [...new Set(textSelectors.flatMap((selector) => gsap.utils.toArray(selector)))];
      textElements.forEach((element) => {
        const split = SplitText.create(element, {
          type: 'lines', mask: 'lines', autoSplit: true, aria: 'auto',
          onSplit: (self) => gsap.from(self.lines, {
            yPercent: 112, autoAlpha: 0, filter: 'blur(5px)', duration: context.conditions.mobile ? 0.58 : 0.76,
            stagger: context.conditions.mobile ? 0.045 : 0.075, ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 87%', toggleActions: 'play reverse play reverse', invalidateOnRefresh: true },
          }),
        });
        textSplits.push(split);
      });
      const secondaryText = gsap.utils.toArray('.service-tags li, .service-card-body > a, .process-step .step-chip, .featured-project-tags span, .featured-project-link, .contact-small, .whatsapp-button, .back-top, .project-image-placeholder');
      secondaryText.forEach((element, index) => {
        gsap.from(element, {
          y: 15, autoAlpha: 0, filter: 'blur(3px)', duration: context.conditions.mobile ? 0.48 : 0.62,
          delay: element.closest('.service-card') ? (index % 4) * 0.055 : 0,
          ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 89%', toggleActions: 'play reverse play reverse', invalidateOnRefresh: true },
        });
      });
      gsap.utils.toArray('.service-card, .featured-project').forEach((card, index) => {
        const image = card.querySelector('.service-image img, .featured-project-image img');
        if (!image) return;
        const isMobile = context.conditions.mobile;
        gsap.fromTo(image,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0 0 0% 0)', duration: isMobile ? 0.7 : 1.05, delay: card.classList.contains('service-card') ? index * 0.1 : 0, ease: 'power2.inOut', clearProps: 'clipPath', scrollTrigger: { trigger: card, start: 'top 84%', once: true } }
        );
        if (!isMobile) {
          gsap.fromTo(image, { yPercent: 3 }, { yPercent: -3, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 0.55 } });
          const hover = gsap.to(image, { scale: 1.05, duration: 0.55, ease: 'power2.out', paused: true });
          const enter = () => hover.play();
          const leave = () => hover.reverse();
          const focusout = (event) => { if (!card.contains(event.relatedTarget)) leave(); };
          card.addEventListener('pointerenter', enter);
          card.addEventListener('pointerleave', leave);
          card.addEventListener('focusin', enter);
          card.addEventListener('focusout', focusout);
          interactionCleanups.push(() => {
            card.removeEventListener('pointerenter', enter);
            card.removeEventListener('pointerleave', leave);
            card.removeEventListener('focusin', enter);
            card.removeEventListener('focusout', focusout);
          });
        }
      });
      const processSteps = gsap.utils.toArray('.process-step');
      const processStoryStart = () => `top top+=${Math.max(24, (window.innerHeight - (document.querySelector('.process-stage')?.offsetHeight || 440)) / 2)}`;
      gsap.set('.connection-glow', { drawSVG: '0% 16.7%', opacity: 0.35 });
      gsap.set('.stage-progress i', { scaleX: 1 / processSteps.length, transformOrigin: 'left center' });
      if (!context.conditions.mobile) {
        gsap.timeline({ scrollTrigger: { trigger: '.process-story', start: processStoryStart, end: 'bottom bottom-=112', scrub: 0.6, pin: '.process-stage', pinSpacing: false, anticipatePin: 1, invalidateOnRefresh: true } })
          .to('.connection-glow', { drawSVG: '100%', opacity: 0.92, ease: 'none' }, 0)
          .to('.stage-progress i', { scaleX: 1, ease: 'none' }, 0)
          .to('.process-visual-core', { rotation: 360, ease: 'none' }, 0)
          .to('.process-halo', { scale: 1.14, opacity: 0.82, ease: 'none' }, 0);
      }
      const activateStep = (step, index) => {
        const stage = document.querySelector('.process-stage');
        stage?.setAttribute('data-stage', index);
        const counter = stage?.querySelector('.stage-counter b');
        if (counter) counter.textContent = step.querySelector('.step-number').textContent.slice(0, 2);
        const current = stage?.querySelector('.stage-current');
        if (current) current.textContent = step.querySelector('h3').textContent.toUpperCase();
        processSteps.forEach((item, itemIndex) => item.classList.toggle('is-active', itemIndex === index));
        stage?.querySelectorAll('.process-module').forEach((module, moduleIndex) => module.classList.toggle('is-lit', moduleIndex <= Math.min(index, 4)));
        gsap.to('.process-beam', { scaleY: index / Math.max(processSteps.length - 1, 1), duration: 0.55, ease: 'power2.out', overwrite: true });
        if (context.conditions.mobile) {
          gsap.to('.stage-progress i', { scaleX: (index + 1) / processSteps.length, duration: 0.45, ease: 'power2.out', overwrite: true });
          gsap.to('.connection-glow', { drawSVG: ((index + 1) / processSteps.length) * 100 + '%', opacity: 0.92, duration: 0.5, ease: 'power2.out', overwrite: true });
          gsap.to('.process-visual-core', { rotation: index * 32, duration: 0.6, ease: 'power2.out', overwrite: true });
        }
        gsap.fromTo('.process-module', { scale: 0.94 }, { scale: 1, duration: 0.55, stagger: 0.045, ease: 'power2.out', overwrite: true });
      };
      processSteps.forEach((step, index) => {
        ScrollTrigger.create({
          trigger: step,
          start: context.conditions.desktop ? 'center center' : 'top 62%',
          end: context.conditions.desktop ? 'center center' : 'bottom 62%',
          onEnter: () => activateStep(step, index),
          onEnterBack: () => activateStep(step, index),
        });
      });
      activateStep(processSteps[0], 0);
      return () => { intro.kill(); interactionCleanups.forEach((cleanup) => cleanup()); textSplits.forEach((split) => split.revert()); smoother?.kill(); };
    });
    return () => mm.revert();
  }, []);
}
