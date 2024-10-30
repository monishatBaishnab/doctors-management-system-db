# **Doctor Management System**

A comprehensive **Doctor Management System** designed to manage doctors, patients, appointments, prescriptions, and medical records. This backend system uses **Prisma ORM** with a **PostgreSQL** database to ensure smooth data operations and maintain entity relationships efficiently.

---

**Key Components:**

- **Doctors**: Information about healthcare providers.
- **Patients**: Store patient details and demographic data.
- **Appointments**: Schedule and manage appointments between doctors and patients.
- **Prescriptions**: Manage prescriptions issued during appointments.
- **Medical Records**: Store patient medical histories.
- **Departments**: Define organizational units and associate doctors with them.

---

## **Database Schema**

Below is the **Prisma schema** for the Doctor Management System.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Doctor model
model doctors {
  doctor_id      Int     @id @default(autoincrement())
  first_name     String  @db.VarChar(255)
  last_name      String  @db.VarChar(255)
  email          String  @unique @db.VarChar(255)
  phone_number   String? @db.VarChar(255)
  address        String? @db.VarChar(255)
  specialization String? @db.VarChar(255)
  appointments   appointments[]
}

// Patient model
model patients {
  patient_id    Int       @id @default(autoincrement())
  first_name    String    @db.VarChar(255)
  last_name     String    @db.VarChar(255)
  email         String    @unique @db.VarChar(255)
  phone_number  String?   @db.VarChar(255)
  address       String?   @db.VarChar(255)
  date_of_birth DateTime?
  gender        gender?
  appointments  appointments[]
  medical_records medical_records[]
}

// Appointment model
model appointments {
  appointment_id   Int                @id @default(autoincrement())
  doctor_id        Int
  patient_id       Int
  appointment_date DateTime
  status           appointment_status

  doctor   doctors   @relation(fields: [doctor_id], references: [doctor_id])
  patient  patients  @relation(fields: [patient_id], references: [patient_id])
  prescription prescriptions?
}

// Prescription model
model prescriptions {
  prescription_id Int     @id @default(autoincrement())
  appointment_id  Int     @unique
  medication      String  @db.VarChar(255)
  dosage          String  @db.VarChar(255)
  instructions    String? @db.VarChar(255)

  appointment appointments @relation(fields: [appointment_id], references: [appointment_id])
}

// Medical Record model
model medical_records {
  record_id   Int     @id @default(autoincrement())
  patient_id  Int
  diagnosis   String? @db.VarChar(255)
  treatment   String  @db.VarChar(255)
  record_date String  @db.VarChar(255)

  patient patients @relation(fields: [patient_id], references: [patient_id])
}

// Department model
model departments {
  department_id   Int    @id @default(autoincrement())
  department_name String @db.VarChar(255)
  department_head Int

  doctor doctors @relation(fields: [department_head], references: [doctor_id])
}

// Enums for Gender and Appointment Status
enum gender {
  mail
  femail
}

enum appointment_status {
  scheduled
  completed
  cancelled
}
```

---

## **Entity Relationships**

1. **Doctors and Appointments**:

   - A **doctor** can have multiple appointments.
   - Each **appointment** belongs to a single doctor.

2. **Patients and Appointments**:

   - A **patient** can have multiple appointments.
   - Each **appointment** is linked to a specific patient.

3. **Appointments and Prescriptions**:

   - Each **appointment** can have one associated **prescription**.
   - A **prescription** is always linked to a single appointment.

4. **Patients and Medical Records**:

   - A **patient** can have multiple medical records.
   - Each **medical record** belongs to one patient.

5. **Departments and Doctors**:
   - Each **department** has a department head, which is a **doctor**.
   - Doctors can be associated with a department as the head.
