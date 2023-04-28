import {CoursesService} from "./courses.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe("CoursesService", () => {
  let coursesService: CoursesService, httpTestingController: HttpTestingController;

  beforeEach(()=>{

    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        CoursesService
      ]
    })

    coursesService = TestBed.get(CoursesService);

  })

  it('should retrieve all courses', ()=>{

  })
})
