import express, { query } from "express";
import db from "../config/database.js";
import multer from "multer"; 
import { MongoClient, Binary } from 'mongodb';
import fs from 'fs';
import zlib from 'zlib'

const router = express.Router()
const ticker = db.collection('stock_ticker');

//-----------------------------------------------------------------------------------------------------------------------------------------
  // router.get("/songByName/:song", async (req,res)=>{
  //   try{
  //     const {song} = req.params
      
  //     const songTitle = await details.find({
  //       "$or":[
  //         { "title": { "$regex": new RegExp(song,"i")}},
  //         { "artist": { "$regex": new RegExp(song,"i")}}
  //       ]
  //     }).toArray()

  //     res.status(200).json(songTitle)
  //   }catch(error){
  //     console.error("Error:", error)
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // })

  router.get("/allticker", async (req,res)=>{
    try {
      const allTicker = await ticker.find({}).toArray(); // ดึงข้อมูล ticker ทั้งหมดจาก MongoDB
      res.status(200).json(allTicker); // ส่งข้อมูล ticker กลับในรูปแบบ JSON
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })

export default router;