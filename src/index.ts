import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";

createConnection().then(async connection => {
  const photo1 = new Photo();
  photo1.url = "me.jpg";
  await connection.manager.save(photo1);
  
  const photo2 = new Photo();
  photo2.url = "me-and-bears.jpg";
  await connection.manager.save(photo2);
  
  const photo3 = new Photo();
  photo3.url = "bears.jpg";
  await connection.manager.save(photo3);

  const user1 = new User();
  user1.name = "John";
  user1.photos = [photo1, photo2];
  await connection.manager.save(user1);

  const user2 = new User();
  user2.name = "Adam";
  user2.photos = [photo3];
  await connection.manager.save(user2);

  console.log('->');
}).catch(error => console.log(error));
