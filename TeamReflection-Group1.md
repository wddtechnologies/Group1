*~*~*~*~*~*~*~*~*~*~*~*
!   Team Reflection   !
*~*~*~*~*~*~*~*~*~*~*~*

Overall this was a great learning experience for all of us to learn
  how to use GitHub as a team


*~*~*~*~*~*~*~*~*~*~*~*
How We Divided the Work:

- Alexandria: Set up the project scaffolding, html, css, note taking, keeping the project on track and organized
- Komal: CRUD components and API in the Service, Input on decision making
- Wubit: Service and Model, Input on decision making
- Rahul: Fixed merge conflict issue, powerpoint presentation, Input on decision making 

*~*~*~*~*~*~*~*~*~*~*~*
What Went Well:

- we not only built a working inventory management application but we did it in good time too!
- we implemented the functions we aimed to plus a few extras like search, filtering and the low stock popup
- every team member gained experience not only with Angular but also with GitHub and working as a team

*~*~*~*~*~*~*~*~*~*~*~*
Challenges We Faced:

- merge conflicts were our biggest challenge. Multiple members edited the same files without proper coordination
    which resulted in 6 unresolved merge conflicts. This caused the project to not compile until this was fixed.
- large image files were added without being compressed which resulted in a 128mb image folder causing slow cloning
- even after fixing the code, we ran into a loading spinner issue caused by Angular's change detection not picking up the HTTP response. This required understanding how ChangeDetectorRef works, which was a new concept for the team.
- team members encountered issues running json-server locally — port conflicts, missing installations, and CORS errors between the Angular dev server and the API.

*~*~*~*~*~*~*~*~*~*~*~*
What We Learned As A Team:

- Communication is essential for Git: We learned that before editing any shared file, we need to tell the team. The merge conflicts we faced were entirely avoidable if we had communicated who was working on what.
- Pull before you push. This simple habit would have prevented most of our version control issues.
- Build the foundation first: We should have implemented the service and routing before building the component templates. Without the service, the components had nothing to connect to.
- Test as you go: Several bugs could have been caught earlier if we had tested each feature right after building it instead of waiting until the end.
- Understand what you build: Using AI tools helped us fix issues quickly, but the real value was in understanding why the fixes worked — learning about Observables, dependency injection, and change detection through the debugging process.

*~*~*~*~*~*~*~*~*~*~*~*
How We Would Improve Our Process:

- use feature branches in Git instead of everyone pushing to main. 
    - Each member works on their own branch and creates a pull request for review before merging.
- always pull before pushing 
- hold a brief daily check-in (even a quick message) to share what each person is working on and avoid file conflicts.
- set up a shared task list at the start to clearly assign components, services, and features to specific team members.
- compress assets before committing and agree on file size limits for images.
- write a working service with mock data first so everyone can build their components against a functioning database
- be more patient with waiting for other files to be completed before being able to start your part 

