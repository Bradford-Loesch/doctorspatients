
-- -----------------------------------------------------
-- Table `tempusdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL,
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `age` INT NULL,
  `street` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `state` CHAR(2) NULL,
  `phone` INT NULL,
  `role` INT NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `tempusdb`.`appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `appointment` (
  `id` INT NOT NULL,
  `purpose` VARCHAR(255) NULL,
  `time` DATETIME NULL,
  `doctor_id` INT NOT NULL,
  `patient_id` INT NOT NULL,
  PRIMARY KEY (`id`, `doctor_id`, `patient_id`),
  INDEX `fk_appointment_user_idx` (`doctor_id` ASC),
  INDEX `fk_appointment_user1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_appointment_user`
    FOREIGN KEY (`doctor_id`)
    REFERENCES `tempusdb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointment_user1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `tempusdb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

