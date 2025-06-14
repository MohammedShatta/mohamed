#!/bin/bash

SOURCE_DIR="./images"
OUTPUT_DIR="./compressed"

find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
  # تحديد المسار النسبي
  rel_path="${file#$SOURCE_DIR/}"
  out_path="$OUTPUT_DIR/$rel_path"
  out_dir=$(dirname "$out_path")

  # إنشاء الفولدر الفرعي داخل compressed لو مش موجود
  mkdir -p "$out_dir"

  echo "📦 ضغط: $rel_path"

  extension="${file##*.}"
  if [[ "$extension" == "png" ]]; then
    magick "$file" -strip -define png:compression-level=9 "$out_path"
  else
    magick "$file" -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB "$out_path"
  fi
done

echo "✅ كل الصور اتضغطت مع الحفاظ على ترتيب الفولدرات داخل: $OUTPUT_DIR"