import { Body, Controller, Get, Param, Post, Query, Delete } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import {ApiCreatedResponse} from '@nestjs/swagger';
import { query } from 'express';
import { get } from 'http';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-courtse.dto';

@Controller('courses')
export class CoursesController {
    constructor (private coursesService: CoursesService){}

        @Get()
        @ApiOkResponse({description: 'List of All courses'})
        async getCourses(){
            const courses = await this.coursesService.getCourses();
            return courses;
        }

        @Get(':courseId')
        @ApiOkResponse({description: 'List of 1 course'})
        async getCourse(@Param('courseId') courseId){
            const course = await this.coursesService.getCourse(courseId);
            return course;
        }
        
        @Post()
        @ApiCreatedResponse({description: 'Added a Course'})
        async addCourses(@Body() CreateCourseDto: CreateCourseDto){
            const course = await this.coursesService.addCourses(CreateCourseDto);
            return course;
        }

        @Delete()
        @ApiOkResponse({description: 'Removed a course'})
            async deleteCourse(@Query() query){
                const courses = await this.coursesService.deleteCourse(query.courseId);
                return courses;
            }
        
    }


