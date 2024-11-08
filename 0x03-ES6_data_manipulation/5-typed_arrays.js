export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new DataView(new ArrayBuffer(length), 0, length);
    buffer.setInt8(position, value);
    return buffer;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
