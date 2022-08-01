export default abstract class Reader {
  abstract data: unknown;
  abstract read(): void;
  abstract fileName: string;
}
