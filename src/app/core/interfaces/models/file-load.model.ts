export class FileLoad {
  key?: string;
  name?: string;
  url?: string;
  file?: File;

  constructor(file?: File | null) {
    if (file) {
      this.file = file;
    }
  }
}

