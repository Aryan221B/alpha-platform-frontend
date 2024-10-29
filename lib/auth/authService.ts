import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export class AuthService {
  static async validateCredentials(email: string, password: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          password: true,
          userType: true,
          name: true,
        },
      });

      if (!user) {
        return { error: 'Invalid email or password' };
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return { error: 'Invalid email or password' };
      }

      const { password: _, ...userWithoutPassword } = user;
      return { user: userWithoutPassword };
    } catch (error) {
      console.error('Auth validation error:', error);
      return { error: 'Authentication failed' };
    }
  }
}
