"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_controller_1 = require("./app.controller");
const auth_controller_1 = require("./auth/auth.controller");
const passport_1 = __importDefault(require("passport"));
const appRouter = express_1.default.Router();
appRouter.get("/", app_controller_1.getHelloHandler);
appRouter.post("/register", auth_controller_1.registerHandler);
appRouter.post("/login", auth_controller_1.loginHandler);
appRouter.get("/auth/user/:id", auth_controller_1.getUserById);
appRouter.put("/auth/user", passport_1.default.authenticate("jwt", { session: false }), auth_controller_1.updateUserController);
// appRouter.get("/auth/activate/:token", activateAccountHandler);
// appRouter.get(
//   "/categories-and-courses",
//   passport.authenticate("jwt", { session: false }),
//   getCategoriesAndCourses
// );
// appRouter.post(
//   "/courses",
//   passport.authenticate("jwt", { session: false }),
//   createCourseHandler
// );
// appRouter.get("/swagger.json", (req, res) => {
//   res.json(swaggerSpec);
// });
// appRouter.get(
//   "/courses",
//   passport.authenticate("jwt", { session: false }),
//   GetCourses
// );
// appRouter.get(
//   "/courses/:courseId",
//   passport.authenticate("jwt", { session: false }),
//   getCourseDetails
// );
// appRouter.get(
//   "/courses/course-with-progress/:courseId",
//   passport.authenticate("jwt", { session: false }),
//   GetCourseWithProgress
// );
// appRouter.get(
//   "/courses/courseUnique/:courseId",
//   passport.authenticate("jwt", { session: false }),
//   getUniqueCourse
// );
// appRouter.get(
//   "/chapters/:courseId/chapters/:chapterId",
//   passport.authenticate("jwt", { session: false }),
//   getChapterHandler
// );
// appRouter.post(
//   "/courses/:courseId/upload",
//   passport.authenticate("jwt", { session: false }),
//   upload.single("file"),
//   uploadFile
// );
// appRouter.post(
//   "/courses/:courseId/chapters",
//   passport.authenticate("jwt", { session: false }),
//   createChapterHandler
// );
// appRouter.get(
//   "/purchases",
//   passport.authenticate("jwt", { session: false }),
//   checkPurchase
// );
// appRouter.get(
//   "/:courseId/chapters/:chapterId",
//   passport.authenticate("jwt", { session: false }),
//   getChapter
// );
// appRouter.get(
//   "/chapters/get-chapter",
//   passport.authenticate("jwt", { session: false }),
//   getChapterData
// );
// appRouter.patch(
//   "/courses/:courseId",
//   passport.authenticate("jwt", { session: false }),
//   updateCourse
// );
// appRouter.patch(
//   "/courses/:courseId/chapters/:chapterId",
//   passport.authenticate("jwt", { session: false }),
//   updateChapter
// );
// appRouter.patch(
//   "/courses/:courseId/chapters/:chapterId/publish",
//   passport.authenticate("jwt", { session: false }),
//   publishChapterHandler
// );
// appRouter.patch(
//   "/courses/:id/publish",
//   passport.authenticate("jwt", { session: false }),
//   publishCourseHandler
// );
// appRouter.patch(
//   "/courses/:id/unpublish",
//   passport.authenticate("jwt", { session: false }),
//   unpublishCourseHandler
// );
// appRouter.patch(
//   "/courses/:courseId/chapters/:chapterId/unpublish",
//   passport.authenticate("jwt", { session: false }),
//   unpublishChapterHandler
// );
// appRouter.get(
//   "/protected",
//   passport.authenticate("jwt", { session: false }),
//   (req: Request, res: Response) => {
//     res.json({ message: "Protected route accessed", user: req.user });
//   }
// );
exports.default = appRouter;
