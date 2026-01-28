const mainElement = document.querySelector(".main");

const MOUSE_WHEEL_THRESHOLD = 100;
const TOUCHPAD_THRESHOLD = 800;

let accumulatedDelta = 0;

/**
 * マウスホイールかタッチパッドかを推測する
 * @param {WheelEvent} event
 * @returns {boolean} マウスホイールならtrue
 */
function isMouseWheel(event) {
  // deltaMode === 1 は行単位（マウスホイールが多い）
  if (event.deltaMode === 1) {
    return true;
  }
  // ピクセル単位でも、大きな値が来たらマウスホイールの可能性が高い
  if (event.deltaMode === 0 && Math.abs(event.deltaY) >= 50) {
    return true;
  }
  return false;
}

mainElement.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    const threshold = isMouseWheel(event) ? MOUSE_WHEEL_THRESHOLD : TOUCHPAD_THRESHOLD;

    accumulatedDelta += event.deltaY;

    if (Math.abs(accumulatedDelta) >= threshold) {
      const direction = accumulatedDelta > 0 ? 1 : -1;
      const sectionWidth = window.innerWidth;

      mainElement.scrollBy({
        left: direction * sectionWidth,
        behavior: "smooth",
      });

      accumulatedDelta = 0;
    }
  },
  { passive: false },
);
