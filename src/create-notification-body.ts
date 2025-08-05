/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsUUID, Length} from 'class-validator'

//validação em decorators

export class CreateNotificationBody {
  @IsNotEmpty() //não pode ser vazio
  @IsUUID() //precisa ser um UUID
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240) //minimo e maximo de caracteres
  content: string;

  @IsNotEmpty()
  category: string;
}
