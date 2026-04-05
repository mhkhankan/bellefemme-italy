import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CourseMicroblading = () => <CourseTemplate course={getCourseById('raw-stroke-master')!} />;
export default CourseMicroblading;
