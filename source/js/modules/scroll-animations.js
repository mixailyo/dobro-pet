function scrollAnimations() {
  let sections = document.querySelectorAll('section');
  let shareSocialLinks = document.querySelectorAll('.share__social-link');
  let shareSocialList = document.querySelector('.share__social-list');

  if (sections.length) {
    sections.forEach(section => {
      let goTalkNode = section.querySelector('.go-talk');

      const myScrollTimeline = new ScrollTimeline({
        source: document.scrollingElement,
        scrollSource: document.scrollingElement,
        orientation: 'block',
          scrollOffsets: [
            CSS.px(section.getBoundingClientRect().top - document.documentElement.clientHeight),
            CSS.px(section.getBoundingClientRect().top - document.documentElement.clientHeight * 0.2),
          ],
      });
    
      section.animate(
        {
          opacity: ["0", "1"]
        },
        { 
          duration: 1, 
          fill: "both", 
          timeline: myScrollTimeline 
        }
      );

      if (goTalkNode) {
        goTalkNode.animate(
          {
            transform: goTalkNode.dataset.positionX === 'right' ? ["translateX(200px)", "translateX(0)"] : ["translateX(-200px)", "translateX(0)"]
          },
          { 
            duration: 1, 
            fill: "both", 
            timeline: myScrollTimeline 
          }
        );
      }
    })
  }

  if (shareSocialLinks.length) {
    const myScrollTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      scrollSource: document.scrollingElement,
      orientation: 'block',
        scrollOffsets: [
          CSS.px(shareSocialList.getBoundingClientRect().top - document.documentElement.clientHeight),
          CSS.px(shareSocialList.getBoundingClientRect().top - document.documentElement.clientHeight * 0.8),
        ],
    });

    shareSocialLinks.forEach((link, i) => {
      link.animate(
        {
          opacity: ["0", "1"],
          transform: i % 2 === 0 ? ["translateY(30px)", "translateX(0)"] : ["translateY(-30px)", "translateX(0)"]
        },
        { 
          duration: 1, 
          fill: "both", 
          timeline: myScrollTimeline 
        }
      );
    })
  }
}

export {scrollAnimations}
