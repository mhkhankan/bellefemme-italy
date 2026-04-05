import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CourseMasterclassBrows = () => <CourseTemplate course={getCourseById('brow-blueprint')!} />;
export default CourseMasterclassBrows;
