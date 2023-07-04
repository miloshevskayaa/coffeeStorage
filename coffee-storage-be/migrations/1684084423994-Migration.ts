import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1684084423994 implements MigrationInterface {
  name = 'Migration1684084423994';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`recipe\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`rus_title\` varchar(20) NOT NULL, \`espresso_count\` tinyint NOT NULL, \`water_count\` tinyint NOT NULL, \`milk_count\` tinyint NOT NULL, \`milk_foam_count\` tinyint NOT NULL, \`wripped_cream_count\` tinyint NOT NULL, \`ice_cream_count\` tinyint NOT NULL, \`chocolate_count\` tinyint NOT NULL, \`lemon_juice_count\` tinyint NOT NULL, \`whiskey_count\` tinyint NOT NULL, \`syrop_count\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`coffee\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`title\` varchar(20) NOT NULL, \`image_primary\` varchar(60) NOT NULL, \`image_secondary\` varchar(60) NOT NULL, \`video_link\` varchar(255) NOT NULL, \`recipeId\` varchar(36) NULL, UNIQUE INDEX \`REL_a7af2512bddf9d2d8da34a3e2b\` (\`recipeId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` smallint NOT NULL, \`avatar\` varchar(64) NULL, \`user_name\` varchar(40) NOT NULL, \`email\` varchar(40) NOT NULL, \`phone_number\` varchar(40) NULL, \`password\` varchar(72) NOT NULL, UNIQUE INDEX \`IDX_758b8ce7c18b9d347461b30228\` (\`user_id\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_01eea41349b6c9275aec646eee\` (\`phone_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`one_time_password\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`otp\` varchar(16) NOT NULL, \`userId\` varchar(36) NULL, UNIQUE INDEX \`IDX_baad3eb989ae49a5d39f93557f\` (\`otp\`), UNIQUE INDEX \`REL_47e930d26650fc7fec23300be7\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`statistics\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`result\` varchar(255) NOT NULL, \`date\` timestamp NOT NULL, \`userId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`test\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`question\` varchar(255) NOT NULL, \`image\` varchar(64) NOT NULL, \`rightAnswerId\` varchar(36) NULL, UNIQUE INDEX \`IDX_d29a03c47402a07b7e3a747bc2\` (\`question\`), UNIQUE INDEX \`REL_4818ed7500dff7b607ca214271\` (\`rightAnswerId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user_favorite_coffee\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` varchar(36) NULL, \`coffeeId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`coffee\` ADD CONSTRAINT \`FK_a7af2512bddf9d2d8da34a3e2b3\` FOREIGN KEY (\`recipeId\`) REFERENCES \`recipe\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`one_time_password\` ADD CONSTRAINT \`FK_47e930d26650fc7fec23300be71\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`statistics\` ADD CONSTRAINT \`FK_c9989a8e8506743633ba5e0aed0\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`test\` ADD CONSTRAINT \`FK_4818ed7500dff7b607ca2142712\` FOREIGN KEY (\`rightAnswerId\`) REFERENCES \`coffee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_favorite_coffee\` ADD CONSTRAINT \`FK_59f7a324f72ec2a611af51836a8\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user_favorite_coffee\` ADD CONSTRAINT \`FK_958eb93ecc3ad1ad0300926f050\` FOREIGN KEY (\`coffeeId\`) REFERENCES \`coffee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user_favorite_coffee\` DROP FOREIGN KEY \`FK_958eb93ecc3ad1ad0300926f050\``);
    await queryRunner.query(`ALTER TABLE \`user_favorite_coffee\` DROP FOREIGN KEY \`FK_59f7a324f72ec2a611af51836a8\``);
    await queryRunner.query(`ALTER TABLE \`test\` DROP FOREIGN KEY \`FK_4818ed7500dff7b607ca2142712\``);
    await queryRunner.query(`ALTER TABLE \`statistics\` DROP FOREIGN KEY \`FK_c9989a8e8506743633ba5e0aed0\``);
    await queryRunner.query(`ALTER TABLE \`one_time_password\` DROP FOREIGN KEY \`FK_47e930d26650fc7fec23300be71\``);
    await queryRunner.query(`ALTER TABLE \`coffee\` DROP FOREIGN KEY \`FK_a7af2512bddf9d2d8da34a3e2b3\``);
    await queryRunner.query(`DROP TABLE \`user_favorite_coffee\``);
    await queryRunner.query(`DROP INDEX \`REL_4818ed7500dff7b607ca214271\` ON \`test\``);
    await queryRunner.query(`DROP INDEX \`IDX_d29a03c47402a07b7e3a747bc2\` ON \`test\``);
    await queryRunner.query(`DROP TABLE \`test\``);
    await queryRunner.query(`DROP TABLE \`statistics\``);
    await queryRunner.query(`DROP INDEX \`REL_47e930d26650fc7fec23300be7\` ON \`one_time_password\``);
    await queryRunner.query(`DROP INDEX \`IDX_baad3eb989ae49a5d39f93557f\` ON \`one_time_password\``);
    await queryRunner.query(`DROP TABLE \`one_time_password\``);
    await queryRunner.query(`DROP INDEX \`IDX_01eea41349b6c9275aec646eee\` ON \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_758b8ce7c18b9d347461b30228\` ON \`user\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP INDEX \`REL_a7af2512bddf9d2d8da34a3e2b\` ON \`coffee\``);
    await queryRunner.query(`DROP TABLE \`coffee\``);
    await queryRunner.query(`DROP TABLE \`recipe\``);
  }
}
