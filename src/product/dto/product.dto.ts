import { ArrayMinSize, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ProductDto {
  @IsString({
    message: "Title required",
  })
  @IsNotEmpty({ message: "Title cannot be empty" })
  title: string;

  @IsString({ message: "Description required" })
  @IsNotEmpty({ message: "Description cannot be empty" })
  description: string;

  @IsNumber({}, { message: "Price must be a number" })
  @IsNotEmpty({ message: "The price cannot be empty" })
  price: number;

  @IsString({
    message: "Please provide at least one image",
    each: true,
  })
  @ArrayMinSize(1, { message: "There must be at least one picture" })
  @IsNotEmpty({
    each: true,
    message: "Path to image cannot be empty",
  })
  images: string[];

  @IsString({
    message: "Category required",
  })
  @IsNotEmpty({ message: "Category ID cannot be empty" })
  categoryId: string;

  @IsString({
    message: "Color is a must",
  })
  @IsNotEmpty({ message: "Color ID cannot be empty" })
  colorId: string;
}
