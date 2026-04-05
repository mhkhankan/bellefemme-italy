import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CoursePMU = () => <CourseTemplate course={getCourseById('master-blueprint')!} />;
export default CoursePMU;
