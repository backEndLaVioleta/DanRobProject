// import { forwardRef, Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { UsersModule } from 'src/users/users.module';
// import { AuthService } from './_auth.service';
// import { JwtStrategy } from './strategies/_jwt.strategy';
// import { LocalStrategy } from './strategies/_local.strategy';
// import { AuthModule } from './auth.module';

// @Module({
//   imports: [
//     UsersModule,
//     AuthModule,
//     // PassportModule,
//     // JwtModule.register({
//     //   secret: 'secret',
//     //   signOptions: { expiresIn: '1d' },
//     // }),
//   ],
//   providers: [
//     AuthService,
//     // JwtStrategy, LocalStrategy
//   ],
//   exports: [AuthService],
// })
// // export class AuthModule {}
