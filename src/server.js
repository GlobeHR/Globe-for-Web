import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';

dotenv.config(); // load dotenv

const app = express();
const PORT = 3000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json())