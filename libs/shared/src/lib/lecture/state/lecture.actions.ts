export class LoadLecture {
  static readonly type = '[Lecture] Load Lecture Data';
  constructor(public lectureId: number = null) {
  }
}

export class LoadPreviousScreen {
  static readonly type = '[Lecture] Load Previous Screen';
  constructor() {
  }
}

export class LoadNextScreen {
  static readonly type = '[Lecture] Load Next Screen';
  constructor() {
  }
}

export class RevealResult {
  static readonly type = '[Lecture] Reveal Result'
}
