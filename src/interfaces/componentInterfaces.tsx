export interface Note {
  title: string;
  description: string;
  createdAt: string;
  targetType: string;
  author: {
    fullname: string;
  };
}

export interface Caller {
  phoneNumber: string;
}
