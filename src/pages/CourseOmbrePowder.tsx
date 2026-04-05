import { CourseTemplate } from '@/components/CourseTemplate';
import { getCourseById } from '@/Data/courses';
const CourseOmbrePowder = () => <CourseTemplate course={getCourseById('pigment-restauro')!} />;
export default CourseOmbrePowder;
