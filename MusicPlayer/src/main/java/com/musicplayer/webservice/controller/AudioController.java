package com.musicplayer.webservice.controller;

import org.springframework.http.HttpHeaders;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;


import java.io.BufferedOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@RestController
@ResponseBody
@RequestMapping("/media")
public class AudioController {

    @GetMapping("/{fileName}")
    public ResponseEntity<StreamingResponseBody> getMedia(@PathVariable String fileName, @RequestBody(required = false) String rangeHeader) throws IOException {
        Path filePath = FileSystems.getDefault().getPath("src/main/resources/songs/AntiHero.mpeg");
        byte[] buffer = new byte[1024];
        final HttpHeaders responseHeader = new HttpHeaders();
        StreamingResponseBody responseStream;
        Long fileSize;
        if(Files.exists(filePath))
            fileSize = Files.size(filePath);
        else {
            fileSize = 0L;
        }
        long startPosition = 0L;
//        List<Byte> completeReading = new ArrayList<>();
        try {
            RandomAccessFile file = new RandomAccessFile(filePath.toString(), "r");
            responseHeader.add("Content-Type", "video/mp4");
            responseHeader.add("Content-Length", Long.toString(file.length()));
            responseStream = os ->{
                long position = startPosition;
                os = new BufferedOutputStream(
                        os,
                          32*1021);
                file.seek(position);
                while (position < fileSize) {
                    file.read(buffer);
                    os.write(buffer);
                    position += buffer.length;
                }
                os.flush();
            };
            return new ResponseEntity<StreamingResponseBody>
            (responseStream, responseHeader, HttpStatus.OK);

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
