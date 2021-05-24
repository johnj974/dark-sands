export interface Feature {
  icon: string;
  name: string;
}

export class RoomModel {
  constructor(
    public name: string,
    public image: string,
    public features: Feature[]
  ) {}
}
