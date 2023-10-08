function mockDelay(time) {
  return new Promise((r) => setTimeout(r, time));
}

export default { mockDelay };
