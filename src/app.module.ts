import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { ColorModule } from "./color/color.module";
import { CategoryModule } from "./category/category.module";
import { FileModule } from "./file/file.module";
import { StoreModule } from "./store/store.module";
import { OrderModule } from "./order/order.module";
import { StatisticsModule } from "./statistics/statistics.module";
import { ProductModule } from "./product/product.module";
import { ReviewModule } from "./review/review.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    ColorModule,
    CategoryModule,
    FileModule,
    StoreModule,
    OrderModule,
    StatisticsModule,
    ProductModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"),
      serveRoot: "/uploads",
    }),
    ReviewModule,
  ],
})
export class AppModule {}
