import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CourseEyeliner = () => <CourseTemplate course={getCourseById('lash-line-precision')!} />;
export default CourseEyeliner;
