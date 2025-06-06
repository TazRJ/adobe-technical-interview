export default function decorate(block) {
  block.classList.add('banner');

  const [headingWrapper, descriptionWrapper] = block.children[0]?.children || [];

  if (headingWrapper) {
    headingWrapper.classList.add('banner-heading');
    headingWrapper.querySelector('p')?.classList.add('banner-heading-text');
  }

  if (descriptionWrapper) {
    descriptionWrapper.classList.add('banner-description');
    descriptionWrapper.querySelector('p')?.classList.add('banner-description-text');
  }
}
