export interface User {
  uid: string;             // Identificador único del usuario
  name: string;            // Nombre del usuario
  email: string;           // Correo electrónico del usuario
  profileImage?: string;   // URL de la imagen de perfil del usuario (opcional)
}
