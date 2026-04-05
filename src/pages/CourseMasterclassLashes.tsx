import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CourseMasterclassLashes = () => <CourseTemplate course={getCourseById('volume-lash-design')!} />;
export default CourseMasterclassLashes;
