import { IsString } from 'class-validator'

export class ColorDto {
  @IsString({
    message: "Title required",
  })
  name: string;

  @IsString({
    message: "The value is mandatory",
  })
  value: string;
}
